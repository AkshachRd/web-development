PROGRAM Hello(INPUT, OUTPUT);
USES
  DOS;
VAR
  nameinput, name: STRING;
  I, J: INTEGER;
BEGIN
  name := '';
  WRITELN('Content-Type: text/plain');
  WRITELN;
  nameinput := GetEnv('QUERY_STRING');
  WHILE (nameinput[I] <> '&') OR (I <> LENGTH(nameinput)) 
  DO
    BEGIN
      IF POS('name=', nameinput) <> 0
      THEN
        I := POS('name=', nameinput) + 5; 
      I := I + 1
    END;
  FOR I := 6 TO LENGTH(nameinput)
  DO
    name := name + nameinput[I];
  IF name <> ''
  THEN
    WRITELN('Hello dear, ', name, '!')
  ELSE
    WRITELN('Hello Anonymous!')
END.