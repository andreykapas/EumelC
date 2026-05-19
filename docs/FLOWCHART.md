# Eumel — Flowchart

> **Графическая версия:** открой [`flowchart.html`](./flowchart.html) в браузере  
> или выполни `npm run docs`

## Общий поток игры

```mermaid
flowchart TD
    START([Старт игры]) --> SETUP[Создать игроков 4–6]
    SETUP --> PHASE_UP[Фаза 1: пирамида вверх<br/>1 → max карт]
    PHASE_UP --> CHECK_UP{Ещё раунды<br/>в фазе 1?}
    CHECK_UP -->|да| ROUND
    CHECK_UP -->|нет| PHASE_DOWN[Фаза 2: пирамида вниз<br/>max−1 → 1]
    PHASE_DOWN --> CHECK_DOWN{Ещё раунды<br/>в фазе 2?}
    CHECK_DOWN -->|да| ROUND
    CHECK_DOWN -->|нет| PHASE_ORDER[Фаза 3: заказы<br/>каждый игрок выбирает N карт]
    PHASE_ORDER --> CHECK_ORDER{Все заказали<br/>свой раунд?}
    CHECK_ORDER -->|нет| ROUND
    CHECK_ORDER -->|да| FINAL_BONUS[Финал: +10 всем<br/>с макс. числом угадываний]
    FINAL_BONUS --> END([Eumel / победитель])
    ROUND --> CHECK_UP
    ROUND --> CHECK_DOWN
    ROUND --> CHECK_ORDER
```

---

## Один раунд

```mermaid
flowchart TD
    R_START([Начало раунда]) --> DEAL[Тасовка + раздача N карт<br/>остаток остаётся в колоде]
    DEAL --> VIS{Карт<br/>на игрока?}
    VIS -->|1| VIS_ONE[Все видят чужие карты<br/>свою — нет]
    VIS -->|2+| VIS_HAND[Каждый видит только свою руку]
    VIS_ONE --> BID
    VIS_HAND --> BID[Ставки по очереди]

    BID --> BID_FIRST{Первый раунд<br/>игры?}
    BID_FIRST -->|да| BID_P1[Первым ставит игрок 1]
    BID_FIRST -->|нет| BID_LOSER[Первым ставит проигравший<br/>прошлого раунда]
    BID_P1 --> BID_LOOP
    BID_LOSER --> BID_LOOP[Игроки ставят по кругу]

    BID_LOOP --> BID_LAST{Последний<br/>ставящий?}
    BID_LAST -->|нет| BID_LOOP
    BID_LAST -->|да| BID_CHECK{Сумма ставок<br/>допустима?}

    BID_CHECK -->|нет| BID_REJECT[Отклонить ставку<br/>выбрать другую]
    BID_REJECT --> BID_CHECK
    BID_CHECK -->|да| TRICKS

    TRICKS[Взятки: первым ходит<br/>последний ставивший] --> TRICK_LOOP{Ещё взятки<br/>в раунде?}
    TRICK_LOOP -->|да| PLAY[Игроки ходят по кругу<br/>следование масти обязательно]
    PLAY --> WIN[Определить победителя взятки<br/>♠ > ♣ > ♦ > ♥, старший ранг]
    WIN --> TRICK_LOOP
    TRICK_LOOP -->|нет| SCORE[Подсчёт очков раунда]

    SCORE --> SCORE_OK{Угадал<br/>ставку?}
    SCORE_OK -->|да| SCORE_BONUS[score += 10 + tricksWon<br/>correctBids++]
    SCORE_OK -->|нет| SCORE_PLAIN[score += tricksWon]
    SCORE_BONUS --> ROUND_END
    SCORE_PLAIN --> ROUND_END[Проигравший раунда →<br/>первый в ставках следующего]
    ROUND_END --> R_END([Конец раунда])
```

---

## Проверка суммы ставок (последний ставящий)

```mermaid
flowchart TD
    INPUT[Последний игрок выбирает ставку] --> SUM[Сумма всех ставок]
    SUM --> CENTRAL{Центральный<br/>раунд?<br/>5–6 max-карт}

    CENTRAL -->|нет| RULE1{sum === tricks?}
    RULE1 -->|да| REJECT[Недопустимо]
    RULE1 -->|нет| OK[Ставка принята]

    CENTRAL -->|да| RULE2{sum === tricks<br/>или tricks±1?}
    RULE2 -->|да| REJECT
    RULE2 -->|нет| OK
```

---

## Подсчёт взятки

```mermaid
flowchart TD
    LEAD[Первая карта задаёт масть хода] --> NEXT{Ещё карты<br/>в взятке?}
    NEXT -->|да| FOLLOW{У игрока есть<br/>масть хода?}
    FOLLOW -->|да| MUST[Обязан сыграть масть хода]
    FOLLOW -->|нет| ANY[Может сыграть любую]
    MUST --> COMPARE
    ANY --> COMPARE[Сравнить с текущим лидером<br/>card.beats]
    COMPARE --> NEXT
    NEXT -->|нет| WINNER[Победитель забирает взятку<br/>tricksWon++]
```

---

## Финал игры

```mermaid
flowchart TD
    FIN([Все раунды сыграны]) --> MAX[Найти max correctBids]
    MAX --> BONUS[+10 score всем<br/>с correctBids === max]
    BONUS --> MIN[Найти min score]
    MIN --> EUMEL[Eumel: все с score === min]
    MIN --> WIN[Победитель: все с score === max]
```
