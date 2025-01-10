(function() {
  const style = document.createElement('style');
  style.textContent = `
    .cpr-ai-widget {
      font-family: system-ui, -apple-system, sans-serif;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
      background: white;
      max-width: 600px;
      margin: 1rem auto;
    }
    .cpr-ai-widget iframe {
      width: 100%;
      height: 600px;
      border: none;
      border-radius: 0.5rem;
    }
  `;
  document.head.appendChild(style);

  window.initCPRAIWidget = function(elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const widget = document.createElement('div');
    widget.className = 'cpr-ai-widget';
    
    const iframe = document.createElement('iframe');
    iframe.src = '${window.location.origin}';
    iframe.title = 'CPR-AI Asistente de Seguros';
    
    widget.appendChild(iframe);
    container.appendChild(widget);
  };
})();