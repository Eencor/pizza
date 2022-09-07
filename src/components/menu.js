import React from "react";
import FoodSection from "./foodSection";

function Menu() {

    const pizza = [
        {
            title: 'Пеперони',
            compound: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
            image: "./assets/pizzas/peperoni.jpeg",
            price: 350,
            id: 'pizza_1',
        },
        {
            title: 'Ветчина и грибы',
            compound: 'Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус',
            image: "./assets/pizzas/hamAndMush.jpeg",
            price: 300,
            id: 'pizza_2',
        },
        {
            title: 'Чизбергер-пицца',
            compound: 'Мясной соус болоньезе, соус бургер, маринованные огурчики, томаты, красный лук, моцарелла',
            image: "./assets/pizzas/burger.jpeg",
            price: 400,
            id: 'pizza_3',
        },
        {
            title: 'Сырный цыпленок',
            compound: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
            image: "./assets/pizzas/cheeseChicken.jpeg",
            price: 420,
            id: 'pizza_4',
        },
        {
            title: 'Цыпленок барбекю',
            compound: 'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, томатный соус',
            image: "./assets/pizzas/chickenBBQ.jpeg",
            price: 410,
            id: 'pizza_5',
        },
        {
            title: 'Цыпленок ранч',
            compound: 'Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок',
            image: "./assets/pizzas/chickenRanch.jpeg",
            price: 390,
            id: 'pizza_6',
        },
        {
            title: 'Ветчина и сыр',
            compound: 'Ветчина, моцарелла, соус альфредо',
            image: "./assets/pizzas/hamAndCheese.jpeg",
            price: 310,
            id: 'pizza_7',
        }];

    const drink = [
        {
            title: 'Вода',
            compound: '',
            image: "./assets/drinks/water.jpeg",
            price: 70,
            id: 'drink_1',
        },
        {
            title: 'Кофе Латте',
            compound: 'Когда хочется нежную молочную пенку, на помощь приходит классический латте',
            image: "./assets/drinks/coffeeLatte.jpeg",
            price: 150,
            id: 'drink_2',
        }];

    return(
        <div className="menu">
            <FoodSection id = {'pizza'} title = {'Пицца'} food = {pizza}/>
            <FoodSection id = {'drink'} title = {'Напитки'} food = {drink}/>
        </div>
    )
}

export default Menu