<div class="container">
    <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" class="form">
        <div class="form__img">
            <img src="images/welcome.png" alt="Welcome">
        </div>
        <h2 class="form__title">Записаться на курс</h2>

        <div class="form__container">
            <label>
                <input type="text" name="name" placeholder="Ваше имя" class="form__input form__input_text">
            </label>
            <label>
                <input type="text" name="email" placeholder="Email" class="form__input form__input_text">
            </label>
            <label>
                <select name="activity" class="form__input form__input_text form__input_select">
                    <option value="" disabled selected hidden>Деятельность</option>
                    <option value="programmer">Программист</option>
                    <option value="designer">Дизайнер</option>
                    <option value="marketer">Маркетолог</option>
                </select>
            </label>

            <input type="checkbox" class="form__checkbox" id="agreement" name="agreement">
            <label for="agreement">Согласен получать информационные материалы о старте курса</label>

            <input type="submit" value="Записаться на курс" class="form__input form__input_submit">
        </div>
    </form>
</div>