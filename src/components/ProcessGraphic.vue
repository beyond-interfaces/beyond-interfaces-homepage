<template>
    <div class="process-graphic">
        <svg width="100%" height="100%">
            <g width="100%" height="100%"
               :class="'section-circle--' + section.id"
               v-for="section in sections"
               v-bind:key="section.id">
                <circle :r="getRadius(section.circle.scale)"
                        :fill="section.circle.color"
                        :cx="getRadius(section.circle.scale)"
                        :cy="getRadius(section.circle.scale)"
                        :transform="getPosition(section.circle)">
                </circle>

                <text class="section-label"
                    :x="getRadius(section.circle.scale)"
                    :y="getRadius(section.circle.scale)"
                    transform="translate(50,50)">
                    {{ section.label }}
                </text>

                <!-- <g-link v-for="link in section.links"
                        v-bind:key="link.label"
                        v-bind:url="link.url">
                    {{ link.label }}
                </g-link> -->
            </g>
        </svg>
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
                    scale: 1,
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
                    scale: 1.2
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
                id: 'develop',
                label: 'Develop',
                circle: {
                    color: '#EB0089',
                    scale: 1.5,
                },
                links: [
                    { label: 'Microservices', url: '' },
                    { label: 'Single Page Applications', url: '' },
                    { label: 'Micro Frontends', url: '' },
                    { label: 'Enterprise CSS', url: '' },
                    { label: 'Test Automation', url: '' },
                ]
            }, {
                id: 'integrate',
                label: 'Integrate',
                circle: {
                    color: '#02AAE0',
                    scale: 1,
                },
                links: [
                    { label: 'Continuous Delivery', url: '' },
                    { label: 'Containerization', url: '' },
                    { label: 'Cloud Deployments', url: '' },
                    { label: 'On-Premise Solutions', url: '' },
                    { label: 'Dev Ops', url: '' },
                ]
            }]
        }
    },
    methods: {
        getRadius(scale) {
            return 100 * scale;
        },
        getPosition(circle) {
            return `translate(50,50)`;
        }
    }
}
</script>
<style lang="scss">
.process-graphic {
    height: 600px;
}

.section-label {
    font-family: initial;
    fill: white;
    text-transform: uppercase;
    font-size: 30px;
}

</style>

