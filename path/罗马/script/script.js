const timelineItems = document.querySelectorAll('.timeline li');
        const contentDivs = document.querySelectorAll('.content div');

        timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                const year = item.getAttribute('data-year');

                // 移除以前的激活状态
                document.querySelector('.timeline li.active')?.classList.remove('active');
                document.querySelector('.content div.active')?.classList.remove('active');

                // 添加新的激活状态
                item.classList.add('active');
                document.querySelector(`.content div[data-year="${year}"]`).classList.add('active');
            });
        });

        // 默认显示第一个时间戳内容
        timelineItems[0].classList.add('active');
        contentDivs[0].classList.add('active');