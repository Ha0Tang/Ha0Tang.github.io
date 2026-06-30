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
                title: 'EvoVLA (ECCV 2026)',
                description: 'A self-supervised framework for robust long-horizon robotic manipulation.',
                src: '/assets/video/EvoVLA.mp4',
                poster: null
            },
            {
                title: 'MobileVLA-R1 (ECCV 2026)',
                description: 'A reasoning-enhanced VLA framework for quadruped robot control.',
                src: '/assets/video/MobileVLA-R1.mp4',
                poster: null
            },
            {
                title: 'ReMoMask (ECCV 2026)',
                description: 'A retrieval-augmented framework for robust text-to-motion generation.',
                src: '/assets/video/ReMoMask.mp4',
                poster: null
            },
            {
                title: 'PhysRAG (ECCV 2026)',
                description: 'A retrieval-augmented framework for physically aware video generation.',
                src: '/assets/video/PhysRAG.mp4',
                poster: null
            },
            {
                title: 'StereoAdapter (ICRA 2026)',
                description: 'A parameter-efficient framework for robust underwater stereo depth estimation.',
                src: '/assets/video/StereoAdapter.mp4',
                poster: null
            },
            {
                title: 'VaseVQA-3D (ICLR 2026)',
                description: 'A domain-adaptive vision-language framework for 3D cultural heritage understanding.',
                src: '/assets/video/VaseVQA-3D.mp4',
                poster: null
            },
            {
                title: 'MotionVLA (2026)',
                description: 'A frequency-aware VLA framework for human motion generation.',
                src: '/assets/video/MotionVLA.mp4',
                poster: null
            },
            {
                title: 'GeneralVLA-2 (2026)',
                description: 'A geometry-aware VLA framework for generalist robot manipulation.',
                src: '/assets/video/GeneralVLA-2.mp4',
                poster: null
            },
            {
                title: 'DragMesh-2 (2026)',
                description: 'A contact-driven framework for dexterous interaction with articulated objects.',
                src: '/assets/video/DragMesh-2.mp4',
                poster: '/assets/img/demos/DragMesh-2.png'
            },
            {
                title: 'PresentAgent-2 (2026)',
                description: 'An agentic framework for research-grounded presentation video generation.',
                src: '/assets/video/PresentAgent-2.mp4',
                poster: null
            },
            {
                title: 'UniMesh (2026)',
                description: 'A unified framework for joint 3D generation and understanding.',
                src: '/assets/video/UniMesh.mp4',
                poster: null
            },
            {
                title: 'PartRM (CVPR 2025)',
                description: 'A 4D reconstruction framework for learning part-level object dynamics from static multi-view images.',
                src: '/assets/video/PartRM.mp4',
                poster: null
            },
            {
                title: '3D-R1 (2025)',
                description: 'A reasoning-enhanced foundation model for robust 3D scene understanding.',
                src: '/assets/video/3D-R1.mp4',
                poster: null
            },
            {
                title: 'Nav-R1 (2025)',
                description: 'A reasoning-enhanced foundation model for embodied navigation.',
                src: '/assets/video/Nav-R1.mp4',
                poster: null
            },
            {
                title: 'UniVid (2025)',
                description: 'A unified multimodal architecture for joint video generation and understanding.',
                src: '/assets/video/UniVid.mp4',
                poster: null
            },
            {
                title: 'Motion Mamba (ECCV 2024)',
                description: 'A state space model for efficient long-sequence human motion generation.',
                src: '/assets/video/MotionMamba.mp4',
                poster: null
            }
        ];

        let demoIndex = 0;

        const title = document.getElementById('feature-demo-title');
        const description = document.getElementById('feature-demo-description');
        const count = document.querySelector('.feature-demo-count');
        const prev = document.querySelector('.feature-demo-prev');
        const next = document.querySelector('.feature-demo-next');

        // ---------- preload cache ----------
        const preloadCache = {};

        function preload(index) {

            index = (index + demos.length) % demos.length;

            if (preloadCache[index]) return;

            const v = document.createElement('video');
            v.preload = 'auto';
            v.src = demos[index].src;

            preloadCache[index] = v;
        }

        // preload first videos
        preload(0);
        preload(1);
        preload(2);

        function showDemo(index) {

            demoIndex = (index + demos.length) % demos.length;

            const demo = demos[demoIndex];

            if (title) title.textContent = demo.title;
            if (description) description.textContent = demo.description;
            if (count) count.textContent = (demoIndex + 1) + " / " + demos.length;

            if (demo.poster) {
                featureDemoVideo.poster = demo.poster;
            } else {
                featureDemoVideo.removeAttribute("poster");
            }

            // already playing this video
            if (featureDemoVideo.src.endsWith(demo.src)) {
                return;
            }

            featureDemoVideo.pause();

            featureDemoVideo.onloadeddata = function () {
                featureDemoVideo.play().catch(function(){});
                featureDemoVideo.onloadeddata = null;
            };

            featureDemoVideo.src = demo.src;

            // preload next videos
            preload(demoIndex + 1);
            preload(demoIndex + 2);
        }

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

        // keyboard support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                showDemo(demoIndex - 1);
            }
            if (e.key === 'ArrowRight') {
                showDemo(demoIndex + 1);
            }
        });

        showDemo(0);

    }

});