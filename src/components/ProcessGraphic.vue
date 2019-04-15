<template>
    <div class="process-graphic">
        <div id="graphic"></div>
        <!-- <svg width="100vw" height="720" :viewBox="getViewBox()">

            <rect width="300%"
                height="100%"
                :transform="getRectangleTransform()"
                fill="#666"
                opacity=".1"
                preserveAspectRatio="none"/>

            <g viewBox="-200 -200 400 400"
               v-for="section in sections"
               :key="section.id"
               :transform="getTransform(section)">

                <circle :r="section.circle.radius"
                        :ref="section.id"
                        :fill="section.circle.color"
                        opacity=".9">
                </circle>

                <text class="section-label"
                      text-anchor="middle">
                    {{ section.label }}
                </text>

                <a class="section-links"
                   v-for="(link, index) in section.links"
                   v-bind:key="link.label">
                    <line width="40" height="1" x="-20" :y="160 + index * 30" stroke-width="2" :currentColor="section.circle.color"/>
                    <circle r="7" cx="-20" :cy="160 + index * 30" :fill="section.circle.color" transform="translate(0, -5)" />
	                <text :x="0" :y="160 + index * 30">{{ link.label }}</text>
                </a>
            </g>
        </svg> -->
    </div>
</template>

<script>
export default {
    name: 'ProcessGraphic',
    data () {
        return {
            sections: [{
                id: 'understand',
                label: 'Understand',
                circle: {
                    color: '#00A648',
                    radius: 100,
                },
                links: [
                    { label: 'User Research', url: ''},
                    { label: 'Process Analysis', url: ''},
                    { label: 'Stakeholder Engagement', url: ''},
                    { label: 'Benchmarking', url: ''},
                ]
            }, {
                id: 'define',
                label: 'Define',
                circle: {
                    color: '#662A8F',
                    radius: 120,
                },
                links: [
                    { label: 'Concept', url: ''},
                    { label: 'Process Optimization', url: ''},
                    { label: 'Wireframing', url: ''},
                    { label: 'UI/UX Design', url: ''},
                    { label: 'Prototyping', url: ''},
                    { label: 'Design Systems', url: ''},
                ]
            }, {
                id: 'integrate',
                label: 'Integrate',
                circle: {
                    color: '#02AAE0',
                    radius: 120,
                },
                links: [
                    { label: 'Continuous Delivery', url: '' },
                    { label: 'Containerization', url: '' },
                    { label: 'Cloud Deployments', url: '' },
                    { label: 'On-Premise Solutions', url: '' },
                    { label: 'Dev Ops', url: '' },
                ]
            }, {
                id: 'develop',
                label: 'Develop',
                circle: {
                    color: '#EB0089',
                    radius: 160,
                },
                links: [
                    { label: 'Microservices', url: '' },
                    { label: 'Single Page Applications', url: '' },
                    { label: 'Micro Frontends', url: '' },
                    { label: 'Enterprise CSS', url: '' },
                    { label: 'Test Automation', url: '' },
                ]
            }]
        }
    },
    methods: {
        getViewBox() {
            return `-${window.innerWidth / 2} -512 ${window.innerWidth} 1024`;
        },
        getRectangleTransform() {
            return `translate(-${window.innerWidth / 2}, -512) skewX(7)`;
        },
        getTransform(section) {
            let newPosition = {};

            switch(section.id) {
                case 'understand':
                    newPosition.x = -400;
                    newPosition.y = 0;
                    break;
                case 'define':
                    newPosition.x = -200;
                    newPosition.y = 0;
                    break;
                case 'develop':
                    newPosition.x = 100;
                    newPosition.y = 0;
                    break;
                case 'integrate':
                    newPosition.x = 400;
                    newPosition.y = 0;
                    break;
                default:
            }

            const translate = `translate(${newPosition.x}, ${newPosition.y})`;
            const scale = `scale(${Math.random() + 1})`;
            return `${translate} ${scale}`;
        }
    },
    mounted() {
        import('svg.js').then(module => {
            let SVG = module.default;

            let draw = SVG('graphic')
                .size(window.innerWidth, 720)
                .viewbox(this.getViewBox());


            this.sections.forEach(section => {
                let sectionGroup = draw.group();

                // section circle group
                let sectionCircle = sectionGroup.group();

                sectionCircle.circle(section.circle.radius)
                    .fill(section.circle.color);

                sectionCircle.text(section.label)
                    .attr({
                        'class': 'section-label',
                        'text-anchor':'middle'
                    });

                sectionGroup.polyline('40,40 160,80 180,80')
                    .fill('none')
                    .stroke({ color: section.circle.color, width: 1 })

                sectionGroup.circle(16)
                    .move(180, 72)
                    .fill(section.circle.color);

                sectionGroup.text('Text here')
                    .move(210, 72)
                    .fill('#000');

                sectionGroup.on('mouseover', function() {
                    this.animate().transform({ scale: 1.2 })
                })

                sectionGroup.on('mouseleave', function() {
                    this.animate().transform({ scale: 1 })
                })

                sectionGroup.move(-window.innerWidth / 2, 0);
            });


            // var group2 = group1.clone().move(0, 20);
            // var group3 = group2.clone().move(0, 40);
            // var group4 = group3.clone().move(0, 60);
        });
    },
}
</script>
<style>
#process-graphic {
    height: 600px;
}

.section-links {
    font-family: ff-dax-pro-wide,sans-serif;
    font-weight: 400;
    font-size: .8em;
}

.section-label {
    font-family: ff-dax-pro-wide,sans-serif;
    fill: white;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 2em;
}
</style>

