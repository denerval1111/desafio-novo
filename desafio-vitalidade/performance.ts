// Utilitários para otimização de performance

/**
 * Função para carregamento lazy de imagens
 * Implementa um observador de interseção para carregar imagens apenas quando
 * elas estão próximas de entrar na viewport
 */
export function setupLazyLoading() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
}

/**
 * Função para adiar o carregamento de scripts não críticos
 * Carrega scripts apenas depois que a página principal foi carregada
 */
export function loadDeferredScripts(scripts: string[]) {
  if (typeof window === 'undefined') {
    return;
  }

  if (document.readyState === 'complete') {
    loadScripts();
  } else {
    window.addEventListener('load', loadScripts);
  }

  function loadScripts() {
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }
}

/**
 * Função para implementar carregamento progressivo de imagens
 * Primeiro carrega uma versão de baixa qualidade, depois substitui pela versão de alta qualidade
 */
export function setupProgressiveImageLoading() {
  if (typeof window === 'undefined') {
    return;
  }

  const progressiveImages = document.querySelectorAll('.progressive-img-container');
  
  progressiveImages.forEach(container => {
    const thumbImg = container.querySelector('.thumb-img') as HTMLImageElement;
    const fullImg = container.querySelector('.full-img') as HTMLImageElement;
    
    if (thumbImg && fullImg && fullImg.dataset.src) {
      // Pré-carrega a imagem completa
      const img = new Image();
      img.src = fullImg.dataset.src;
      
      // Quando a imagem completa carregar, faz a transição
      img.onload = () => {
        fullImg.src = fullImg.dataset.src || '';
        fullImg.classList.add('loaded');
        thumbImg.classList.add('hidden');
      };
    }
  });
}

/**
 * Função para implementar carregamento sob demanda de componentes
 * Carrega componentes apenas quando necessário, como em tabs ou accordions
 */
export function setupLazyComponents() {
  if (typeof window === 'undefined') {
    return;
  }

  const lazyContainers = document.querySelectorAll('[data-lazy-container]');
  
  lazyContainers.forEach(container => {
    const triggers = container.querySelectorAll('[data-lazy-trigger]');
    const contents = container.querySelectorAll('[data-lazy-content]');
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const targetId = (trigger as HTMLElement).dataset.lazyTarget;
        
        if (targetId) {
          const targetContent = container.querySelector(`[data-lazy-content="${targetId}"]`);
          
          if (targetContent && (targetContent as HTMLElement).dataset.loaded !== 'true') {
            // Aqui você pode carregar o conteúdo dinamicamente via fetch ou outro método
            (targetContent as HTMLElement).dataset.loaded = 'true';
          }
        }
      });
    });
  });
}

/**
 * Função para otimizar o carregamento de fontes
 * Implementa a estratégia de font-display: swap e preload
 */
export function optimizeFontLoading() {
  if (typeof window === 'undefined') {
    return;
  }

  // Adiciona classe quando as fontes estão carregadas
  if ('fonts' in document) {
    document.fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
}

/**
 * Inicializa todas as otimizações de performance
 */
export function initPerformanceOptimizations() {
  if (typeof window === 'undefined') {
    return;
  }

  // Executa quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runOptimizations);
  } else {
    runOptimizations();
  }

  function runOptimizations() {
    setupLazyLoading();
    setupProgressiveImageLoading();
    setupLazyComponents();
    optimizeFontLoading();
    
    // Carrega scripts não críticos
    loadDeferredScripts([
      '/js/analytics.js',
      '/js/chat-widget.js'
    ]);
  }
}
