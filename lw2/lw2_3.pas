PROGRAM Hello(INPUT, OUTPUT);
USES
  DOS;
VAR
  NameInput, Name: STRING;
  I, J: INTEGER;
BEGIN
  Name := '';
  WRITELN('Content-Type: text/plain');
  WRITELN;
  NameInput := GetEnv('QUERY_STRING');
  WHILE (NameInput[I] <> '&') OR (I <> LENGTH(NameInput)) 
  DO
    BEGIN
      IF POS('name=', NameInput) <> 0
      THEN
        I := POS('name=', NameInput) + 5; 
      I := I + 1
    END;
  FOR I := 6 TO LENGTH(NameInput)
  DO
    Name := Name + NameInput[I];
  IF name <> ''
  THEN
    WRITELN('Hello dear, ', Name, '!')
  ELSE
    WRITELN('Hello Anonymous!')
END.
