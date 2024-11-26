// Класс который будет отвечать за всю логику взаимодействия с корзиной и ее синхронизацию
// Работает по принципу DependencyInversion. Он умеет многое, но не знает, как это делается
// На вход ожидает какой-то интерфейс

// Также потом написать несколько unit тестов на этот класс
export class BasketManager {
    basket: Basket;
    constructor(
        defaultBasket,
        basketApiService,
        browserStorage,
        updateStore,
    ) {}

    handleSyncBasket = () => {

    }

    handleAddToBasket = () => {

    }

    handleRemoveFromBasket = () => {

    }
}