-- lw11.4.1
SELECT 
	*
FROM 
	student AS s
WHERE
	TIMESTAMPDIFF(YEAR, s.birthday, CURDATE()) = 19;
-- lw11.4.2
SELECT 
	s.student_id, s.first_name, s.last_name, s.birthday
FROM 
	student AS s
JOIN
	`group` AS g ON g.group_id = s.group_id
WHERE
	g.name = 'ПС-13';
-- lw11.4.3
SELECT 
	s.student_id, s.first_name, s.last_name, s.birthday
FROM 
	student AS s
JOIN
	faculty_has_group AS fhg ON fhg.group_id = s.group_id
JOIN
	faculty AS f ON f.faculty_id = fhg.faculty_id
WHERE
	f.name = 'ФИиВТ';
-- lw11.4.4
SELECT 
	f.name, g.name
FROM 
	faculty AS f
JOIN
	faculty_has_group AS fhg ON fhg.faculty_id = f.faculty_id
JOIN
	`group` AS g ON g.group_id = fhg.group_id
JOIN
	student AS s ON s.group_id = g.group_id
WHERE
	s.student_id = 21;
	