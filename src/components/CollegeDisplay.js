import React from 'react';
import { getProgramCounts, formatNumber } from '../helpers';
import { Card, Row, Col, Title, Text, PercentageWrapper, PercentBar, BGColor } from '../styles';
import UniversityIcon from '../images/university.svg';

const CollegeDisplay = ({ college }) => {
	const {
		'school.name': schoolName,
		'school.state': state,
		'school.city': city,
		'latest.student.size': studentSize,
		'latest.admissions.admission_rate.overall': admissionRate,
		'latest.programs.cip_4_digit': programs,
	} = college;

	const admissionRatePercentage = Math.floor(admissionRate * 100);

	const renderAdmissionRate = () => {
		if (admissionRate === null) {
			return <Text>Not Available</Text>;
		}
		return (
			<React.Fragment>
				<Col style={{ paddingTop: '3px' }}>
					<Text bold color="purple">
						{`${admissionRatePercentage}% `}
					</Text>
				</Col>
				<Col
					style={{
						flex: 3,
					}}
				>
					<PercentageWrapper width={'70px'}>
						<PercentBar percent={admissionRatePercentage} />
					</PercentageWrapper>
				</Col>
			</React.Fragment>
		);
	};

	const renderPrograms = () => {
		// getProgramCounts() returns an object with type of degrees
		// the college offers and count of each type of degree
		// {'Associate Degree': 15}

		// convert programCounts object into an array to map over
		const programCounts = Object.entries(getProgramCounts(programs));

		if (programCounts.length > 0) {
			return programCounts.map((program) => {
				const [name, count] = program;
				return (
					<Text key={name}>
						{name}: <span style={{ fontWeight: 'bold' }}>{count}</span>
					</Text>
				);
			});
		}

		return <Text>Program info not available</Text>;
	};

	return (
		<Card>
			<Row style={{ maxHeight: '150px' }}>
				<Col style={{ flex: 1 }}>
					<div
						style={{
							height: 'auto',
							textAlign: 'center',
						}}
					>
						<img src={UniversityIcon} alt="University Logo" height="60px" />
					</div>
				</Col>
				<Col
					style={{
						flex: 3,
					}}
				>
					<Row style={{ paddingBottom: '10px' }}>
						<Col>
							<div>
								<Title bold>{schoolName}</Title>
							</div>
							<div>
								<Text
									style={{
										marginTop: '5px',
									}}
								>
									<BGColor>
										{city}, {state}
									</BGColor>
								</Text>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<Text>Student Size:</Text>
							<Text color="purple" bold style={{ paddingTop: '3px' }}>
								{studentSize ? formatNumber(studentSize) : 'N/A'}
							</Text>
						</Col>

						<Col>
							<Row>
								<Col>
									<Text>Admission Rate: </Text>
								</Col>
							</Row>
							<Row>{renderAdmissionRate()}</Row>
						</Col>
					</Row>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col style={{ paddingTop: '5px', paddingLeft: '15px' }}>
					<Text bold>Available Program Counts</Text>
					{renderPrograms()}
				</Col>
			</Row>
		</Card>
	);
};

export default CollegeDisplay;
