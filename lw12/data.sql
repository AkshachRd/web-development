INSERT INTO faculty (name) VALUES ('ИСА');
INSERT INTO faculty (name) VALUES ('ФИиВТ');
INSERT INTO faculty (name) VALUES ('ЭФ');

INSERT INTO `group` (name,faculty_id) VALUES ('ПС-11', 2);
INSERT INTO `group` (name,faculty_id) VALUES ('ПС-12', 2);
INSERT INTO `group` (name,faculty_id) VALUES ('ПС-13', 2);
INSERT INTO `group` (name,faculty_id) VALUES ('ПС-21', 2);
INSERT INTO `group` (name,faculty_id) VALUES ('ПС-22', 2);

INSERT INTO `group` (name,faculty_id) VALUES ('АРХ-11', 1);
INSERT INTO `group` (name,faculty_id) VALUES ('АРХ-12', 1);
INSERT INTO `group` (name,faculty_id) VALUES ('АРХ-21', 1);
INSERT INTO `group` (name,faculty_id) VALUES ('АРХ-22', 1);
INSERT INTO `group` (name,faculty_id) VALUES ('АРХ-31', 1);

INSERT INTO `group` (name,faculty_id) VALUES ('ИНФ-11', 3);
INSERT INTO `group` (name,faculty_id) VALUES ('ИНФ-12', 3);
INSERT INTO `group` (name,faculty_id) VALUES ('ИНФ-13', 3);
INSERT INTO `group` (name,faculty_id) VALUES ('ИНФ-21', 3);
INSERT INTO `group` (name, faculty_id) VALUES ('ИНФ-22', 3);


INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Агафья', 'Травникова', '2003-05-01', 1);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Дарья', 'Никифорова', '2004-01-17', 1);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Михаил', 'Петров', '2004-03-22', 1);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Мария', 'Несторова', '2003-01-11', 1);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Дмитрий', 'Воробьев', '2003-09-27', 1);

INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Роман', 'Денисов', '2004-04-26', 2);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Марк', 'Белоусов', '2003-07-10', 2);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Алина', 'Андреева', '2003-11-17', 2);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Артём', 'Наумов', '2003-12-17', 2);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Мирон', 'Соколов', '2003-08-20', 2);

INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Алиса', 'Гришина', '2004-03-05', 3);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Матвей', 'Шубин', '2004-04-25', 3);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Лев', 'Мельников', '2004-03-22', 3);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Полина', 'Степанова', '2003-11-20', 3);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Кирилл', 'Леонтьев', '2004-02-11', 3);

INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Диана', 'Морозова', '2004-03-11', 6);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Ярослав', 'Платонов', '2004-01-04', 6);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Эмин', 'Абрамов', '2003-07-28', 6);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Александра', 'Кузнецова', '2003-12-14', 6);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Василий', 'Волков', '2003-07-01', 6);

INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Екатерина', 'Андреева', '2003-08-21', 7);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Надежда', 'Андреева', '2003-11-04', 7);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Илья', 'Константинов', '2003-12-09', 7);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Эмилия', 'Васильева', '2003-09-07', 7);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Злата', 'Ларина', '2004-05-12', 7);

INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Татьяна', 'Шишкина', '2003-11-02', 8);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Родион', 'Рудаков', '2003-11-25', 8);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Степан', 'Герасимов', '2003-11-13', 8);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Эмиль', 'Суханов', '2003-09-19', 8);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Макар', 'Еремеев', '2004-04-27', 8);

INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Василиса', 'Гробунова', '2003-07-02', 11);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Варвара', 'Макарова', '2004-03-13', 11);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Полина', 'Любимова', '2003-09-22', 11);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Максим', 'Кузнецов', '2003-10-04', 11);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Алина', 'Михеева', '2004-01-14', 11);

INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Аиша', 'Колпаков', '2004-02-27', 12);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Александра', 'Семина', '2003-09-24', 12);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Софья', 'Пирогова', '2003-07-30', 12);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Михаил', 'Марков', '2003-11-12', 12);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Ксения', 'Назарова', '2003-06-16', 12);

INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Марк', 'Козлов', '2003-06-16', 13);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Виктория', 'Гусева', '2003-10-08', 13);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Ярослав', 'Коровин', '2003-12-20', 13);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Алексей', 'Волков', '2003-12-20', 13);
INSERT INTO student (first_name, last_name, birthday, group_id) VALUES ('Давид', 'Козырев', '2004-03-29', 13);