import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from "./Header"
import Body from "./Home"
import Footer from "./Footer"

function About() {
	return (
		<Container fluid className='px-4 py-4 text-center backgroundcolor'>
			<img className="d-block mx-auto mb-4 logo" src="/GitHired-Logo-Transparent.png" alt="GitHired Logo"/>
			<Col>
			<h1 class="display-5 fw-bold text-body-emphasis">Level Up Your Career with GitHired</h1>
			<h1 class="lead mb-4">We help students break into tech through mock interviews, 
				Leetcode prep, and career development workshops. Whether you're aiming for a
				 top internship or your first job in tech, our hands-on approach ensures you're prepared.
			</h1>
			<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
				<Button variant="primary" href="https://discord.gg/sSzzyJrHK3" >
				Join GitHired
				</Button>
				<Button variant="outline-secondary">LeetCode With Us</Button>
			</div>
			</Col>
		</Container>
	  )
	}

export default About

{/* <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
	</div> */}