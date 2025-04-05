import {beforeEach, expect, test} from 'vitest'
import {AddressType, CityType} from "./02_02";
import {
    addMoneyToBudget,
    createMessage, createMessages,
    demolishHouseOnTheStreet,
    getBuildingsWithStaffCountGreaterThen, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses,
    repairHouse,
    toFireStaff,
    toHireStaff
} from "./03"
import {createGreetMessages} from "./05_01";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address:
                    {
                        number: 100,
                        street:
                            {
                                title: "White street"
                            }
                    }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: true,
                address:
                    {
                        number: 100,
                        street:
                            {
                                title: "Happy street"
                            }
                    }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address:
                    {
                        number: 101,
                        street:
                            {
                                title: "Happy street"
                            }
                    }
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            },

        ],
        citizensNumber: 1000000
    }
})

// 01. создайте в отдельном файле функциюб чтобы тесты прошли

test("Budget should be for changed fot HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});


// 01. Тест должен пройти


test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли

test("Houses shoulhd be destroyed", () => {
    demolishHouseOnTheStreet(city, "White street");
    //  expect(city.houses[0].id).toBe(1);
    expect(city.houses.length).toBe(2);
});

test("House shoulhd be repared", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test.skip("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test("House sholhd be repared", () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
});
test("Greeting message should be correct for city", () => {
    const message = createMessage(city)
    expect(message).toBe("Пошли все 1000000 жителt New York нахъ");
});

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHouseOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
})

test ("create greeting messages for streets", ()=>{
    let messages = createMessages(city.houses)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White street ")
    expect(messages[1]).toBe("Hello guys from Happy street ")
    expect(messages[2]).toBe("Hello guys from Happy street ")

})