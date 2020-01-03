<h2>
	Welcome to the Resevoir
</h2>

<p>
	A knowledge-base featuring the <router-link to="projects" tag="a">projects</router-link>, <router-link to="manifestations" tag="a">manifestations</router-link>, and ongoing processes of Jonathan Skjøtt.
</p>


<p>
	Jonathan is a media prototyper and design researcher exploring different ways of documenting and sustainable ways of nurturing community. <router-link to="about" tag="a">Learn more</router-link>
</p>

<h3>
	Entries on This Site
</h3>

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
