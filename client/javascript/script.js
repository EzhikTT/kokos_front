const items = document.getElementsByClassName('item');
const width = window.innerWidth * 0.4;

for (let el of items) {

    el.addEventListener('click', event => {

        const elements = document.getElementsByClassName('active');

        for (let item of elements) {

            item.classList.remove('active');
            item.style.width = `80px`;
            ;
        }

        const pathLength = event.path.length;
        let i = 0;
        let parent = null;

        while (i < pathLength && !parent) {
            if (event.path[i].classList.contains('item')) {

                parent = event.path[i];
            } else {
                i++;
            }
        }

        parent.classList.add('active');

        for (let i = 80; i < width; i++) {

            window.requestAnimationFrame(() => {
                setTimeout(
                    () => {
                        parent.style.width = `${i}px`;
                    },
                    (i - 80) / 80 * 200
                );
            });
        }

    });
}