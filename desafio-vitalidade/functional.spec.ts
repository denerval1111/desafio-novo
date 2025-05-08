// Testes de funcionalidade e usabilidade para o site Desafio Vitalidade

import { test, expect } from '@playwright/test';

// Testes de navegação básica
test.describe('Navegação básica', () => {
  test('deve carregar a página inicial corretamente', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Desafio Vitalidade/);
    await expect(page.locator('h1')).toContainText('Envelhecimento com Vitalidade');
  });

  test('deve navegar para a página Sobre o Programa', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sobre >> text=O Programa');
    await expect(page).toHaveURL(/.*\/sobre\/programa/);
    await expect(page.locator('h1')).toContainText('Sobre o Programa');
  });

  test('deve navegar para as páginas dos pilares', async ({ page }) => {
    // Medicina Regenerativa
    await page.goto('/');
    await page.click('text=Pilares >> text=Medicina Regenerativa');
    await expect(page).toHaveURL(/.*\/pilares\/medicina-regenerativa/);
    await expect(page.locator('h1')).toContainText('Medicina Regenerativa');

    // Nutrologia
    await page.goto('/');
    await page.click('text=Pilares >> text=Nutrologia');
    await expect(page).toHaveURL(/.*\/pilares\/nutrologia/);
    await expect(page.locator('h1')).toContainText('Nutrologia');

    // Saúde Mental
    await page.goto('/');
    await page.click('text=Pilares >> text=Saúde Mental');
    await expect(page).toHaveURL(/.*\/pilares\/saude-mental/);
    await expect(page.locator('h1')).toContainText('Saúde Mental');

    // Gerenciamento de Peso
    await page.goto('/');
    await page.click('text=Pilares >> text=Gerenciamento de Peso');
    await expect(page).toHaveURL(/.*\/pilares\/gerenciamento-peso/);
    await expect(page.locator('h1')).toContainText('Gerenciamento de Peso');
  });

  test('deve navegar para a página de depoimentos', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sobre >> text=Depoimentos');
    await expect(page).toHaveURL(/.*\/depoimentos/);
    await expect(page.locator('h1')).toContainText('Histórias de Transformação');
  });

  test('deve navegar para a página de inscrição', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Inscreva-se');
    await expect(page).toHaveURL(/.*\/inscricao/);
    await expect(page.locator('h1')).toContainText('Inscreva-se no Desafio Vitalidade');
  });
});

// Testes de responsividade
test.describe('Responsividade', () => {
  test('deve exibir menu mobile em telas pequenas', async ({ page }) => {
    // Configura viewport para mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Verifica se o botão de menu mobile está visível
    const menuButton = page.locator('button[aria-label="Menu"]');
    await expect(menuButton).toBeVisible();
    
    // Verifica se o menu desktop está oculto
    const desktopMenu = page.locator('nav.hidden.md\\:flex');
    await expect(desktopMenu).not.toBeVisible();
    
    // Clica no botão de menu e verifica se o menu mobile aparece
    await menuButton.click();
    const mobileMenu = page.locator('.mobile-menu-container.visible');
    await expect(mobileMenu).toBeVisible();
  });

  test('deve exibir layout adequado em tablets', async ({ page }) => {
    // Configura viewport para tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    // Verifica elementos específicos do layout de tablet
    await expect(page.locator('.beneficios-grid')).toHaveClass(/grid-cols-2/);
  });

  test('deve exibir layout adequado em desktops', async ({ page }) => {
    // Configura viewport para desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    
    // Verifica elementos específicos do layout desktop
    await expect(page.locator('nav.hidden.md\\:flex')).toBeVisible();
    await expect(page.locator('button[aria-label="Menu"]')).not.toBeVisible();
  });
});

// Testes de formulários
test.describe('Formulários', () => {
  test('deve validar campos obrigatórios no formulário de inscrição', async ({ page }) => {
    await page.goto('/inscricao#formulario-inscricao');
    
    // Tenta enviar o formulário sem preencher campos obrigatórios
    await page.click('button[type="submit"]');
    
    // Verifica se a validação de campos obrigatórios está funcionando
    await expect(page.locator('#nome:invalid')).toBeVisible();
    await expect(page.locator('#email:invalid')).toBeVisible();
    await expect(page.locator('#telefone:invalid')).toBeVisible();
    await expect(page.locator('#idade:invalid')).toBeVisible();
    await expect(page.locator('#turma:invalid')).toBeVisible();
    await expect(page.locator('#plano:invalid')).toBeVisible();
    await expect(page.locator('#objetivos:invalid')).toBeVisible();
  });

  test('deve permitir envio do formulário quando todos os campos obrigatórios estão preenchidos', async ({ page }) => {
    await page.goto('/inscricao#formulario-inscricao');
    
    // Preenche todos os campos obrigatórios
    await page.fill('#nome', 'João Silva');
    await page.fill('#email', 'joao.silva@exemplo.com');
    await page.fill('#telefone', '11987654321');
    await page.fill('#idade', '45');
    await page.selectOption('#turma', 'maio-2025');
    await page.selectOption('#plano', 'premium');
    await page.fill('#objetivos', 'Melhorar minha saúde e qualidade de vida.');
    await page.check('#termos');
    
    // Intercepta a submissão do formulário para evitar navegação
    await page.route('**/api/inscricao', route => route.fulfill({ status: 200 }));
    
    // Envia o formulário
    await page.click('button[type="submit"]');
    
    // Verifica se o formulário foi enviado (não há mais campos inválidos)
    await expect(page.locator('#nome:invalid')).toHaveCount(0);
    await expect(page.locator('#email:invalid')).toHaveCount(0);
  });

  test('deve validar formato de email no formulário de contato', async ({ page }) => {
    await page.goto('/inscricao');
    
    // Preenche o campo de email com um formato inválido
    await page.fill('#contato-email', 'email-invalido');
    await page.click('#contato-email');
    await page.keyboard.press('Tab');
    
    // Verifica se a validação de formato de email está funcionando
    await expect(page.locator('#contato-email:invalid')).toBeVisible();
    
    // Corrige o email e verifica se a validação passa
    await page.fill('#contato-email', 'email-valido@exemplo.com');
    await expect(page.locator('#contato-email:invalid')).toHaveCount(0);
  });
});

// Testes de acessibilidade
test.describe('Acessibilidade', () => {
  test('deve ter atributos alt em todas as imagens', async ({ page }) => {
    await page.goto('/');
    
    // Verifica se todas as imagens têm atributo alt
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
      expect(alt?.trim().length).toBeGreaterThan(0);
    }
  });

  test('deve ter contraste adequado entre texto e fundo', async ({ page }) => {
    await page.goto('/');
    
    // Verifica contraste de texto principal
    const textColor = await page.evaluate(() => {
      const element = document.querySelector('p');
      return window.getComputedStyle(element).color;
    });
    
    const backgroundColor = await page.evaluate(() => {
      const element = document.querySelector('body');
      return window.getComputedStyle(element).backgroundColor;
    });
    
    // Nota: Esta é uma verificação simplificada. Em um ambiente real,
    // usaríamos ferramentas específicas de acessibilidade para verificar o contraste.
    expect(textColor).not.toEqual(backgroundColor);
  });

  test('deve ter estrutura de cabeçalhos adequada', async ({ page }) => {
    await page.goto('/');
    
    // Verifica se existe pelo menos um h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
    
    // Verifica se não há pulos na hierarquia de cabeçalhos (ex: h1 para h3 sem h2)
    const hasH2 = await page.locator('h2').count() > 0;
    const hasH3 = await page.locator('h3').count() > 0;
    
    if (hasH3) {
      expect(hasH2).toBeTruthy();
    }
  });
});

// Testes de performance
test.describe('Performance', () => {
  test('deve carregar a página inicial em tempo razoável', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // A página deve carregar em menos de 3 segundos
    expect(loadTime).toBeLessThan(3000);
  });

  test('deve ter tamanho de página razoável', async ({ page }) => {
    await page.goto('/');
    
    // Verifica o tamanho total da página
    const pageSize = await page.evaluate(() => {
      return new Blob([document.documentElement.outerHTML]).size;
    });
    
    // O HTML da página não deve exceder 100KB
    expect(pageSize).toBeLessThan(100 * 1024);
  });
});

// Testes de SEO
test.describe('SEO', () => {
  test('deve ter meta tags essenciais', async ({ page }) => {
    await page.goto('/');
    
    // Verifica meta tags essenciais
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
    await expect(page.locator('meta[name="viewport"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
  });

  test('deve ter Open Graph tags', async ({ page }) => {
    await page.goto('/');
    
    // Verifica Open Graph tags
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:url"]')).toHaveCount(1);
  });

  test('deve ter dados estruturados', async ({ page }) => {
    await page.goto('/');
    
    // Verifica se há pelo menos um script de dados estruturados
    const structuredDataScripts = await page.locator('script[type="application/ld+json"]').count();
    expect(structuredDataScripts).toBeGreaterThanOrEqual(1);
  });
});
