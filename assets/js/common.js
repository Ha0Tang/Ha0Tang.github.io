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
                description: 'DragMesh-2 enables robust contact-driven dexterous manipulation of articulated objects by integrating physically informed contact-aware policy learning without tactile or force feedback.',
                src: '/assets/video/dragmesh2.mp4',
                poster: '/assets/img/demos/dragmesh2.png'
            },
            {
                title: 'Self-Evolving Vision-Language-Action',
                description: 'Robotic policies adapting across tasks through visual reasoning and action feedback.',
                src: '/assets/video/evovla.mp4',
                poster: ''
            },
            {
                title: 'Mobile Robot Vision-Language-Action',
                description: 'Long-horizon mobile manipulation with embodied perception and planning.',
                src: '/assets/video/mobilevlar1.mp4',
                poster: ''
            },
            {
                title: '3D Reconstruction and Reasoning',
                description: 'Geometry-aware visual modeling for richer spatial understanding.',
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
