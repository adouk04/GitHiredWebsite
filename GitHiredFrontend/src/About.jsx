import { Container, Col, Button } from 'react-bootstrap';
import InfoSection from './components/InfoSection';
import CardComponent from './components/CardComponent';

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
				title = "Empowering Students for Career Success"
				text = "At GitHired, we provide students with the tools, guidance, and real-world practice they need to excel in technical interviews. From mock interviews to resume reviews, we help you build confidence and secure top opportunities."
				imgSrc = "/GitHired-Logo-Transparent.png"
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


			<div class="container px-4 py-5" id="hanging-icons">
				<h2 class="pb-2 border-bottom">Hanging icons</h2>
				<div class="row g-4 py-3 row-cols-1 row-cols-lg-3">
					<CardComponent
						title="Mock Interviews"
						imgSrc="/GitHired-Logo-Transparent.png"
						text="Prepare for real technical interviews with mock sessions that simulate the actual experience. Practice coding problems, behavioral questions, and gain feedback to improve your performance under pressure."
					/>
					<CardComponent
						title="Resume Reviews"
						imgSrc="/GitHired-Logo-Transparent.png"
						text="Enhance your resume with expert feedback to make it stand out. We'll help you optimize formatting, content, and structure, ensuring it effectively highlights your skills and experiences to attract employers."
					/>
					<CardComponent
						title="Technical Prep"
						imgSrc="/GitHired-Logo-Transparent.png"
						text="Master coding challenges and algorithms with targeted practice. Our resources guide you through essential concepts, offering curated exercises and solutions to prepare you for technical interviews."
					/>
				</div>
			</div>

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