(() => {
  if (document.documentElement.dataset.coberMessengerReady) return;
  document.documentElement.dataset.coberMessengerReady = 'true';

  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element
      ? event.target.closest('[data-cober-service-messenger]')
      : null;
    if (!link || event.defaultPrevented || event.button !== 0) return;

    const container = link.closest('[data-cober-service-consultation]');
    const status = container?.querySelector('[data-cober-copy-status]');
    const manual = container?.querySelector('[data-cober-copy-manual]');
    const subject = link.dataset.consultationKind === 'bespoke'
      ? 'Tôi muốn được tư vấn đặt đóng mẫu giày'
      : 'Tôi muốn được tư vấn dịch vụ';
    const message = `${subject}: ${link.dataset.serviceTitle}\n${link.dataset.serviceUrl}`;

    const success = () => {
      if (manual) manual.hidden = true;
      if (status) status.textContent = 'Tên và link đã được sao chép. Hãy dán vào Messenger và gửi để được tư vấn.';
    };
    const fallback = () => {
      if (manual) {
        manual.value = message;
        manual.hidden = false;
      }
      if (status) status.textContent = 'Trình duyệt chưa cho phép sao chép tự động. Hãy sao chép nội dung bên dưới, rồi dán vào Messenger và gửi.';
    };

    // Keep native link navigation so Messenger opens during the user gesture.
    // The clipboard request also starts directly within that gesture.
    try {
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(message).then(success, fallback);
      } else {
        fallback();
      }
    } catch {
      fallback();
    }
  });
})();
