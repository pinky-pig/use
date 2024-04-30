# SpecificFieldPartial

## 前言

首先知道 Pick Partial Omit 类型。

## 题目

实现一个类型，它具有可选的属性，并使用 Partial 进行扩展。

例如，对于给定的类型：

```ts
interface Person {
  name: string;
  age: number;
  gender: string;
}
```

应该有一个类型，它具有必选的 name 和 age 属性，并且其他属性为可选。

```ts
const tom: SpecificFieldPartial<Person, 'name' | 'age'> = {
  name: 'Tom',
  age: 20,
  gender: 'male',
}
const jack: SpecificFieldPartial<Person, 'name' | 'age'> = {
  name: 'Jack',
  age: 12,
}
```

## 分析

首先需要知道 Pick Partial Omit 类型。

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```
  
所以，实现这个类型，只需要将 Pick 和 Partial 和 Omit 进行组合即可。

```ts
type SpecificFieldPartial<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>
```
