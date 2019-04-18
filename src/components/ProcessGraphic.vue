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
                    radius: 200,
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
                    radius: 240,
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
                    radius: 240,
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
                    radius: 320,
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
    },
    mounted() {
        import('svg.js').then(module => {
            const SVG = module.default;

            const draw = SVG('graphic')
                .size(window.innerWidth, 600)
                .viewbox(this.getViewBox());

            const bgRectangle = draw.rect(window.innerWidth * 3, '100%')
                .move(-(window.innerWidth / 2), -512)
                .transform({ skewX: 7 })
                .fill('#666')
                .attr({
                    'opacity':'.1',
                });

            this.sections.forEach((section, index) => {
                let sectionGroup = draw.group(`section-${section.id}`);

                // section circle group
                let sectionCircle = sectionGroup.group();

                sectionCircle.circle(section.circle.radius)
                    .fill(section.circle.color);

                sectionCircle.text(section.label)
                    .attr({
                        'class': 'section-label',
                        'text-anchor':'middle'
                    });

                const linkGroup = sectionGroup.group();

                section.links.forEach((link, index) => {
                    let sectionLinks = linkGroup.group();

                    sectionLinks.polyline(`
                        ${sectionCircle.cx()},${sectionCircle.cy()}
                        ${sectionCircle.cx() + 220},${sectionCircle.cy() + 50}
                        ${sectionCircle.cx() + 240},${sectionCircle.cy() + 50}`)
                        .fill('none')
                        .stroke({ color: section.circle.color, width: 1 })

                    sectionLinks.circle(24)
                        .move(sectionCircle.cx() + 240,sectionCircle.cy() + 42)
                        .fill(section.circle.color);

                    sectionLinks.text(link.label)
                        .move(sectionCircle.cx() + 270,sectionCircle.cy() + 38)
                        .fill('#000')
                        .attr({ class: 'section-links' });

                    sectionLinks.on('mouseover', function() {
                        this.animate(500, '>', 250).transform({ scale: 1.2 });
                    })

                    sectionLinks.on('mouseleave', function() {
                        this.transform({ scale: 1 });
                    })

                    if (index > 0) {
                        let previousLink = linkGroup.get(index-1);
                        sectionLinks.move(0, previousLink.y() + 30);
                    }
                });

                linkGroup.move(0, -50);

                if (index > 0) {
                    let previousSectionGroup = draw.get(index-1);
                    sectionGroup.move(previousSectionGroup.x() + section.circle.radius, 0);
                } else {
                    sectionGroup.move(-window.innerWidth / 2, 0);
                }
            });
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

