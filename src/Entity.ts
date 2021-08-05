export type EntityProp = keyof Entity;
export class Entity {
  public static create<E extends typeof Entity>(this: E, prop: Omit<InstanceType<E>, EntityProp>): InstanceType<E> {
    const entity = new this() as InstanceType<E>;
    Object.assign(entity, prop);
    return entity;
  }

  public static partial<E extends typeof Entity, P extends Omit<Partial<InstanceType<E>>, EntityProp>>(
    this: E,
    prop: P
  ): Partial<InstanceType<E>> & P & Entity {
    const entity = new this() as InstanceType<E> & P & Entity;
    Object.assign(entity, prop);
    return entity;
  }
}
