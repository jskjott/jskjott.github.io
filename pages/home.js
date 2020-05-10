<h2>
	Welcome to the Resevoir
</h2>

<p>
	A knowledge-base featuring the <router-link to="projects" tag="a">projects</router-link>, <router-link to="manifestations" tag="a">manifestations</router-link>, <router-link to="studies" tag="a">studies</router-link>, and ongoing processes of Jonathan Skjøtt.
</p>


<p>
	Jonathan is a media prototyper and design researcher exploring different ways of documenting and sustainable ways of nurturing community. <router-link to="about" tag="a">Learn more</router-link>
</p>

<h3>
	A space dedicated to the long-term 
</h3>

<p> 
    This space was created in 2018 to help Jonathan capture the ideas and thoughts which linger in the margins of his mind. 
</p>

<table>
    <thead>
        <tr>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(any, index) in pages.slice(1)">
            <td v-if="index % 3 === 0" v-for="(page) in pages.slice(1).slice(index, index + 3)"> <router-link :to="page.title" tag="a">{{ page.title.replace('_', ' ') }}</router-link> </td>
        </tr>
    </tbody>
</table>

<hr style="margin: 3rem 0 1rem 0">
