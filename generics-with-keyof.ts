function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: 'Mini', age: 12 },
  { name: 'LG', age: 13 },
];

console.log(pluck(dogs, 'age'));
console.log(pluck(dogs, 'name'));

interface BaseEvent {
  time: number;
  user: string;
}
interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

function sendEvent<EventName extends keyof EventMap>(
  name: EventName,
  data: EventMap[EventName]
) {
  console.log([name, data]);
}

sendEvent('addToCart', {
  productId: 'foo',
  quantity: 2,
  time: 10,
  user: 'baz',
});
sendEvent('checkout', { user: 'bob', time: 20 });
