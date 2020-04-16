PROGRAM SarahRevere(INPUT, OUTPUT);
USES
  DOS;
VAR
  Query: STRING;
  Lanterns: CHAR;
  I: INTEGER;
BEGIN {PaulRevere}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  Query := GetEnv('QUERY_STRING');
  FOR I := 1 TO Length(Query)
  DO
    BEGIN
      IF Query[I] = '='
      THEN
        Lanterns := Query[I + 1];
    END;
  IF (Lanterns > '0') AND (Lanterns < '3')
  THEN
    BEGIN
      WRITE('The British are coming by ');
      IF Lanterns = '1'
      THEN
        WRITELN('land.')
      ELSE 
        IF Lanterns = '2'
        THEN
          WRITELN('sea.')
    END
  ELSE
    WRITELN('The North Church shows only ''', Lanterns, '''.')
END. {PaulRevere}
