function openModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.add('modal--open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.remove('modal--open');
        document.body.style.overflow = '';
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal--open').forEach(m => {
                m.classList.remove('modal--open');
                document.body.style.overflow = '';
            });
        }
    });