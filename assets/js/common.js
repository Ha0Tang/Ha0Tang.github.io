$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');

    const featureDemoVideo = document.getElementById('feature-demo-video');
    if (featureDemoVideo) {
        const demos = [
            {
                title: 'DragMesh-2',
                description: 'A contact-driven framework for robust dexterous interaction with articulated objects.',
                src: '/assets/video/dragmesh2.mp4',
                poster: '/assets/img/demos/dragmesh2.png'
            },
            {
                title: 'EvoVLA (ECCV 2026)',
                description: 'A self-supervised framework for robust long-horizon robotic manipulation.',
                src: '/assets/video/evovla.mp4',
                poster: ''
            },
            {
                title: 'MobileVLA-R1 (ECCV 2026)',
                description: 'A reasoning-enhanced vision-language-action framework for robust quadruped robot control.',
                src: '/assets/video/mobilevlar1.mp4',
                poster: ''
            },
            {
                title: 'ReMoMask (ECCV 2026)',
                description: 'A retrieval-augmented framework for robust text-to-motion generation.',
                src: '/assets/video/ReMoMask.mp4',
                poster: ''
            },
            {
                title: '3D-R1',
                description: 'A reasoning-enhanced foundation model for robust 3D scene understanding.',
                src: '/assets/video/3dr1.mp4',
                poster: ''
            }
        ];
        let demoIndex = 0;
        const title = document.getElementById('feature-demo-title');
        const description = document.getElementById('feature-demo-description');
        const count = document.querySelector('.feature-demo-count');
        const prev = document.querySelector('.feature-demo-prev');
        const next = document.querySelector('.feature-demo-next');

        const showDemo = function(index) {
            demoIndex = (index + demos.length) % demos.length;
            const demo = demos[demoIndex];
            const wasPaused = featureDemoVideo.paused;
            featureDemoVideo.pause();
            featureDemoVideo.src = demo.src;
            if (demo.poster) {
                featureDemoVideo.poster = demo.poster;
            } else {
                featureDemoVideo.removeAttribute('poster');
            }
            if (title) title.textContent = demo.title;
            if (description) description.textContent = demo.description;
            if (count) count.textContent = (demoIndex + 1) + ' / ' + demos.length;
            featureDemoVideo.load();
            if (!wasPaused || featureDemoVideo.autoplay) {
                featureDemoVideo.play().catch(function() {});
            }
        };

        if (prev) {
            prev.addEventListener('click', function() {
                showDemo(demoIndex - 1);
            });
        }
        if (next) {
            next.addEventListener('click', function() {
                showDemo(demoIndex + 1);
            });
        }
    }
});
