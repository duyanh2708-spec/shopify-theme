(() => {
  const service = new URLSearchParams(window.location.search).get('service');
  if (!service || service.length > 200) return;
  for (const field of document.querySelectorAll('[data-cober-service-message]')) {
    if (!field.value.trim()) {
      field.value = `Tôi muốn được tư vấn dịch vụ: ${service}.\nTình trạng sản phẩm: `;
    }
  }
})();
