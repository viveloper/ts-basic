function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let state = initial;
  return [
    () => state,
    (v: T) => {
      state = v;
    },
  ];
}

const [getValue, setValue] = simpleState({ name: 'casio', age: 25 });
console.log(getValue());
setValue({ name: 'hong', age: 30 });
console.log(getValue());

const [getValue2, setValue2] = simpleState<string | null>(null);
console.log(getValue2());
setValue2('hello');
console.log(getValue2());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemons: Pokemon[] = [
  {
    name: 'Bulbasaur',
    hp: 150,
  },
  {
    name: 'Megasaur',
    hp: 100,
  },
];

console.log(ranker(pokemons, (pokemon) => pokemon.hp));
