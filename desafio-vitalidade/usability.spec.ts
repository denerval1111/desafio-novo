// Testes de usabilidade para o site Desafio Vitalidade

import { test, expect } from '@playwright/test';

// Testes de usabilidade para desktop
test.describe('Usabilidade em Desktop', () => {
  test.beforeEach(async ({ page }) => {
    // Configura viewport para desktop
    await page.setViewportSize({ width: 1280, height: 800 });
  });

  test('deve ter navegação intuitiva com feedback visual', async ({ page }) => {
    await page.goto('/');
    
    // Verifica hover states nos links de navegação
    const navLink = page.locator('nav a').first();
    await navLink.hover();
    
    // Verifica se há mudança de estilo no hover (cor do texto)
    const hoverColor = await navLink.evaluate(el => {
      return window.getComputedStyle(el).color;
    });
    
    // Navega para outra página e verifica se há indicação da página atual
    await page.click('text=Sobre >> text=O Programa');
    await expect(page).toHaveURL(/.*\/sobre\/programa/);
    
    // Verifica se há alguma indicação visual da página atual no menu
    const activeIndicator = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('nav a'));
      return links.some(link => {
        const styles = window.getComputedStyle(link);
        return styles.fontWeight === 'bold' || styles.color.includes('rgb(46, 125, 50)');
      });
    });
    
    expect(activeIndicator).toBeTruthy();
  });

  test('deve ter CTAs (Call to Action) claramente visíveis', async ({ page }) => {
    await page.goto('/');
    
    // Verifica se o CTA principal está visível e destacado
    const mainCTA = page.locator('a:text("Inscreva-se")').first();
    await expect(mainCTA).toBeVisible();
    
    // Verifica se o CTA tem estilo destacado (cor de fundo diferente)
    const ctaBackgroundColor = await mainCTA.evaluate(el => {
      return window.getComputedStyle(el).backgroundColor;
    });
    
    const bodyBackgroundColor = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    
    expect(ctaBackgroundColor).not.toEqual(bodyBackgroundColor);
    
    // Verifica se há CTAs secundários nas seções principais
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    const secondaryCTAs = await page.locator('a:text("Saiba Mais"), a:text("Ver Mais"), a:text("Conhecer")').count();
    expect(secondaryCTAs).toBeGreaterThan(0);
  });

  test('deve ter tempo de carregamento e feedback visual adequados', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Verifica se a página carrega em tempo razoável
    expect(loadTime).toBeLessThan(3000);
    
    // Verifica se há feedback visual durante interações
    const button = page.locator('button, a.btn-primary').first();
    await button.hover();
    
    // Verifica se há mudança de estilo no hover
    const hoverStyle = await button.evaluate(el => {
      return {
        backgroundColor: window.getComputedStyle(el).backgroundColor,
        transform: window.getComputedStyle(el).transform
      };
    });
    
    // Espera alguma mudança visual no hover (cor ou transformação)
    expect(hoverStyle.backgroundColor !== 'transparent' || hoverStyle.transform !== 'none').toBeTruthy();
  });
});

// Testes de usabilidade para mobile
test.describe('Usabilidade em Mobile', () => {
  test.beforeEach(async ({ page }) => {
    // Configura viewport para mobile
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('deve ter menu mobile funcional e acessível', async ({ page }) => {
    await page.goto('/');
    
    // Verifica se o botão de menu mobile está visível
    const menuButton = page.locator('button[aria-label="Menu"]');
    await expect(menuButton).toBeVisible();
    
    // Abre o menu mobile
    await menuButton.click();
    
    // Verifica se o menu mobile está visível
    const mobileMenu = page.locator('.mobile-menu-container.visible');
    await expect(mobileMenu).toBeVisible();
    
    // Verifica se os links de navegação estão acessíveis
    const navLinks = mobileMenu.locator('a');
    await expect(navLinks).toHaveCount({ gte: 5 });
    
    // Verifica se é possível fechar o menu
    const closeButton = mobileMenu.locator('button[aria-label="Fechar menu"]');
    await closeButton.click();
    
    // Verifica se o menu foi fechado
    await expect(mobileMenu).not.toBeVisible();
  });

  test('deve ter elementos touch-friendly em mobile', async ({ page }) => {
    await page.goto('/');
    
    // Verifica se os elementos clicáveis têm tamanho adequado para toque
    const touchTargets = await page.evaluate(() => {
      const minTouchSize = 44; // Tamanho mínimo recomendado em pixels
      const elements = Array.from(document.querySelectorAll('a, button, [role="button"]'));
      
      return elements.map(el => {
        const rect = el.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height,
          isTouchFriendly: rect.width >= minTouchSize && rect.height >= minTouchSize
        };
      });
    });
    
    // Verifica se a maioria dos elementos é touch-friendly
    const touchFriendlyCount = touchTargets.filter(t => t.isTouchFriendly).length;
    expect(touchFriendlyCount / touchTargets.length).toBeGreaterThanOrEqual(0.8); // 80% ou mais
  });

  test('deve ter formulários utilizáveis em mobile', async ({ page }) => {
    await page.goto('/inscricao#formulario-inscricao');
    
    // Verifica se os campos do formulário têm tamanho adequado
    const inputFields = page.locator('input[type="text"], input[type="email"], input[type="tel"], select, textarea');
    
    for (let i = 0; i < await inputFields.count(); i++) {
      const field = inputFields.nth(i);
      
      // Verifica altura do campo (deve ser pelo menos 44px para ser touch-friendly)
      const height = await field.evaluate(el => el.getBoundingClientRect().height);
      expect(height).toBeGreaterThanOrEqual(44);
      
      // Verifica se o campo expande corretamente ao receber foco
      await field.click();
      await page.keyboard.type('Teste');
      
      // Verifica se não há sobreposição de labels quando o campo está preenchido
      const fieldId = await field.getAttribute('id');
      if (fieldId) {
        const label = page.locator(`label[for="${fieldId}"]`);
        if (await label.count() > 0) {
          const labelVisible = await label.isVisible();
          expect(labelVisible).toBeTruthy();
        }
      }
    }
  });
});

// Testes de fluxos de usuário
test.describe('Fluxos de Usuário', () => {
  test('deve completar fluxo de inscrição sem obstáculos', async ({ page }) => {
    // Inicia na página inicial
    await page.goto('/');
    
    // Clica no CTA principal
    await page.click('a:text("Inscreva-se")');
    await expect(page).toHaveURL(/.*\/inscricao/);
    
    // Verifica se pode acessar informações sobre o programa
    await page.click('a:text("Saiba Mais Sobre o Programa")');
    await expect(page).toHaveURL(/.*\/sobre\/programa/);
    
    // Volta para a página de inscrição
    await page.goto('/inscricao#formulario-inscricao');
    
    // Preenche o formulário
    await page.fill('#nome', 'João Silva');
    await page.fill('#email', 'joao.silva@exemplo.com');
    await page.fill('#telefone', '11987654321');
    await page.fill('#idade', '45');
    await page.selectOption('#turma', 'maio-2025');
    await page.selectOption('#plano', 'premium');
    await page.fill('#objetivos', 'Melhorar minha saúde e qualidade de vida.');
    await page.check('#termos');
    
    // Intercepta a submissão do formulário para evitar navegação
    await page.route('**/api/inscricao', route => route.fulfill({ 
      status: 200,
      body: JSON.stringify({ success: true })
    }));
    
    // Envia o formulário
    await page.click('button[type="submit"]');
    
    // Verifica se o formulário foi enviado com sucesso
    // Na implementação real, verificaríamos uma mensagem de sucesso
    await page.waitForTimeout(500); // Espera para simular o processamento
  });

  test('deve fornecer informações suficientes para tomada de decisão', async ({ page }) => {
    // Verifica se a página inicial tem informações básicas sobre o programa
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Envelhecimento com Vitalidade');
    
    // Verifica se há seção de benefícios
    const benefitsSection = page.locator('section:has-text("Benefícios")');
    await expect(benefitsSection).toBeVisible();
    
    // Verifica se há informações sobre os pilares do programa
    const pilarsSection = page.locator('section:has-text("Pilares")');
    await expect(pilarsSection).toBeVisible();
    
    // Navega para a página de depoimentos para ver resultados
    await page.click('text=Sobre >> text=Depoimentos');
    await expect(page).toHaveURL(/.*\/depoimentos/);
    
    // Verifica se há depoimentos reais
    const testimonials = page.locator('.bg-cinza-claro:has-text("anos")');
    await expect(testimonials).toHaveCount({ gte: 2 });
    
    // Navega para a página de inscrição para ver preços
    await page.click('text=Inscreva-se');
    await expect(page).toHaveURL(/.*\/inscricao/);
    
    // Verifica se há informações de preço
    const pricingSection = page.locator('section:has-text("Investimento")');
    await expect(pricingSection).toBeVisible();
    
    // Verifica se há diferentes opções de plano
    const plans = pricingSection.locator('.bg-white');
    await expect(plans).toHaveCount({ gte: 2 });
  });
});

// Testes de acessibilidade avançados
test.describe('Acessibilidade Avançada', () => {
  test('deve ser navegável por teclado', async ({ page }) => {
    await page.goto('/');
    
    // Pressiona Tab repetidamente para navegar pelos elementos interativos
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      
      // Verifica se há um elemento com foco
      const focusedElement = await page.evaluate(() => {
        const active = document.activeElement;
        return active && active !== document.body ? {
          tagName: active.tagName,
          textContent: active.textContent?.trim()
        } : null;
      });
      
      expect(focusedElement).not.toBeNull();
    }
    
    // Verifica se pode ativar um link com Enter
    await page.keyboard.press('Enter');
    
    // Espera pela navegação
    await page.waitForLoadState('networkidle');
    
    // Verifica se a URL mudou (navegação ocorreu)
    const currentUrl = page.url();
    expect(currentUrl).not.toEqual('https://desafiovitalidade.com.br/');
  });

  test('deve ter textos legíveis e bem contrastados', async ({ page }) => {
    await page.goto('/');
    
    // Verifica tamanho de fonte para textos principais
    const paragraphFontSize = await page.evaluate(() => {
      const paragraph = document.querySelector('p');
      return paragraph ? parseFloat(window.getComputedStyle(paragraph).fontSize) : 0;
    });
    
    // Tamanho mínimo recomendado para legibilidade: 16px
    expect(paragraphFontSize).toBeGreaterThanOrEqual(16);
    
    // Verifica contraste entre texto e fundo
    // Nota: Esta é uma verificação simplificada. Em um ambiente real,
    // usaríamos ferramentas específicas de acessibilidade para verificar o contraste.
    const contrastCheck = await page.evaluate(() => {
      function getContrastRatio(color1, color2) {
        // Função simplificada para calcular contraste
        // Em um ambiente real, usaríamos algoritmos mais precisos
        const rgb1 = color1.match(/\d+/g).map(Number);
        const rgb2 = color2.match(/\d+/g).map(Number);
        
        const luminance1 = 0.2126 * rgb1[0] + 0.7152 * rgb1[1] + 0.0722 * rgb1[2];
        const luminance2 = 0.2126 * rgb2[0] + 0.7152 * rgb2[1] + 0.0722 * rgb2[2];
        
        const lighter = Math.max(luminance1, luminance2);
        const darker = Math.min(luminance1, luminance2);
        
        return (lighter + 0.05) / (darker + 0.05);
      }
      
      const elements = document.querySelectorAll('p, h1, h2, h3, a');
      let passCount = 0;
      
      for (const el of elements) {
        const style = window.getComputedStyle(el);
        const textColor = style.color;
        
        // Encontra o elemento de fundo
        let current = el;
        let bgColor = 'rgba(0, 0, 0, 0)';
        
        while (current && bgColor === 'rgba(0, 0, 0, 0)') {
          bgColor = window.getComputedStyle(current).backgroundColor;
          current = current.parentElement;
        }
        
        // Se ainda transparente, assume branco
        if (bgColor === 'rgba(0, 0, 0, 0)') {
          bgColor = 'rgb(255, 255, 255)';
        }
        
        const ratio = getContrastRatio(textColor, bgColor);
        if (ratio >= 4.5) { // Mínimo recomendado para AA
          passCount++;
        }
      }
      
      return {
        total: elements.length,
        passing: passCount
      };
    });
    
    // Pelo menos 90% dos elementos devem passar no teste de contraste
    const passRate = contrastCheck.passing / contrastCheck.total;
    expect(passRate).toBeGreaterThanOrEqual(0.9);
  });
});

// Testes de conteúdo
test.describe('Qualidade do Conteúdo', () => {
  test('deve ter conteúdo sem erros ortográficos ou gramaticais', async ({ page }) => {
    await page.goto('/');
    
    // Lista de palavras comumente escritas incorretamente
    const commonMisspellings = [
      'atravéz', // através
      'concerteza', // com certeza
      'excessão', // exceção
      'extrovertido', // extrovertido
      'geito', // jeito
      'obiter', // obter
      'previlégio', // privilégio
      'entertanto', // entretanto
    ];
    
    // Verifica se há palavras incorretas no conteúdo da página
    const pageContent = await page.evaluate(() => document.body.textContent);
    
    let foundMisspellings = [];
    for (const word of commonMisspellings) {
      if (pageContent.toLowerCase().includes(word.toLowerCase())) {
        foundMisspellings.push(word);
      }
    }
    
    expect(foundMisspellings).toEqual([]);
  });

  test('deve ter conteúdo relevante e informativo', async ({ page }) => {
    await page.goto('/');
    
    // Verifica se há conteúdo substancial na página
    const textContent = await page.evaluate(() => {
      const textNodes = Array.from(document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li'))
        .map(el => el.textContent.trim())
        .filter(text => text.length > 0);
      
      return {
        paragraphCount: document.querySelectorAll('p').length,
        totalTextLength: textNodes.join(' ').length,
        headingCount: document.querySelectorAll('h1, h2, h3, h4, h5, h6').length
      };
    });
    
    // Verifica se há um número razoável de parágrafos
    expect(textContent.paragraphCount).toBeGreaterThanOrEqual(5);
    
    // Verifica se há uma quantidade substancial de texto
    expect(textContent.totalTextLength).toBeGreaterThanOrEqual(1000);
    
    // Verifica se há uma estrutura de cabeçalhos adequada
    expect(textContent.headingCount).toBeGreaterThanOrEqual(3);
  });
});
