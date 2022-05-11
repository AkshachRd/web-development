<!DOCTYPE html>
<html lang="ru">

<head>
  <title>Page about me</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Condensed&display=swap" rel="stylesheet">
  <meta charset="UTF-8" />
</head>

<body>
    <?php
      if (isset($args['success'])):
        if ($args['success']):
            echo '<pre>';
              echo $args['data'];
            echo '</pre>';
        endif ;
        if (!($args['success'])):
          echo '<p>Данного файла не существует</p>';
        endif;
      else: ?>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" class="form form_horizontal">
            <label>
                <input type="text" name="email" placeholder="Email" class="form__input form__input_text">
                <input type="submit" value="Получить данные" class="form__input form__input_submit">
            </label>
        </form>
      <?php endif ;
      ?>
</body>

</html>