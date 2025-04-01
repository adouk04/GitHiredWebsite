import { Container, Col, Button } from 'react-bootstrap';
import InfoSection from './components/InfoSection';
import InfoCard from './components/InfoCard';
import ProfileCard from './components/ProfileCard';

// Check Project_Ideas for future about page ideas
// Listed as About-(put idea here)

/* TO-DO 
Create a component of caroseuls and find & add pictures of githired meetings (ADD TO TOP OF ABOUT PAGE)
https://react-bootstrap.netlify.app/docs/components/carousel

Remove Infosection for githired's meetings and add the image of room location with meeting times on the side
*/

function About() {
	return (
		<div className='backgroundcolor'>

			<Container fluid className='px-4 py-4 text-center'>
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
			
			
			<InfoSection
				title = "GitHired Meetings"
				text = "We provide students with the tools, guidance, and real-world practice they need to excel in technical interviews. From mock interviews to resume reviews, we help you build confidence and secure top opportunities."
				// add another section
				// Resize Campus Map to a nicer
				imgSrc = "/CampusMap.png"
				buttonText = "View More"
				imageRight = {true} //true image right, false image left
			/>

			<InfoSection
				title = "A Community Built for Growth"
				text = "At GitHired, you're not just preparing alone—you’re part of a network of ambitious students and professionals. Collaborate with peers, get insights from industry mentors, and stay motivated with group study sessions. Success is easier when you grow together!"
				imgSrc = "/GitHired-Logo-Transparent.png"
				buttonText = "View More"
				imageRight = {false} //true image right, false image left
			/>


		</div>
	  )
	}

export default About

//function InfoSection(title, text, imgSrc, buttonText, imageRight)

{/* 	<Card
			title="💼 Mock Interviews"
			imgSrc="/GitHired-Logo-Transparent.png"
			text="Practice with peers and industry professionals."
		/>
		<Card
			title="📝 Resume & LinkedIn Reviews"
			imgSrc="/GitHired-Logo-Transparent.png"
			text="Stand out to recruiters with expert feedback."
		/>
		<Card
			title="🧠 Leetcode & Technical Prep"
			imgSrc="/GitHired-Logo-Transparent.png"
			text="Solve real-world coding problems and sharpen your skills."
		/> */}