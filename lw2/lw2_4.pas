PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;

FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  I, N: INTEGER;
  Query, Strin: STRING;
BEGIN
  Query := GetEnv('QUERY_STRING');
  Strin := '';
  N := POS(Key, Query) + LENGTH(Key) + 1;
  FOR I := N TO LENGTH(Query)
  DO
    IF Query[I] = '='
    THEN
      BREAK
    ELSE
      Strin := Strin + Query[I];
  GetQueryStringParameter := Strin
END;

BEGIN {WorkWithQueryString}
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}
