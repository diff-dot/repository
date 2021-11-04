/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Entity } from '../Entity';
import { EntityIdOptions } from '../type/EntityIdOptions';

/**
 * Entity Id 로 사용할 property 를 지정할 decorator
 * - 다수의 property 에 decorator 가 지정될 경우 각 property 의 값을 결합하여 entityId 생성
 * - 결합 순서는 EntityIdOptions 의 seq 를 지정하여 설정 가능
 */
const entityIdKey = Symbol('entityId');
export function EntityId(options: EntityIdOptions = {}): (target: any, propertyName: any) => void {
  return function(target: any, propertyName: any): void {
    let ids = Reflect.getMetadata(entityIdKey, target) as Map<string, EntityIdOptions>;

    if (!ids) {
      ids = new Map<string, EntityIdOptions>();
    }
    ids.set(propertyName, options || {});

    Reflect.defineMetadata(entityIdKey, ids, target);
  };
}

export function getEntityIdProps<T extends Entity, K extends keyof T>(target: T): Map<K, EntityIdOptions> | undefined {
  const entityId = Reflect.getMetadata(entityIdKey, target);
  return entityId;
}
