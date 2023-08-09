export interface IEmployee {
  id: String;
  firstname: String;
  lastname: String;
  email: String;
}

export const dummyEmployeList: IEmployee[] = [
  {
    id: new Date().toJSON.toString(),
    firstname: "Demo",
    lastname: "demo",
    email: "demo@gmail.com",
  },
];

export enum PageEnum {
  list,
  add,
}
