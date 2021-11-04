/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Entity } from '../Entity';

/**
 * 라우팅 또는 파티셔닝에 사용할 property 를 지정할 decorator
 * 하나의 property 에만 지정 가능
 */
const routingIdKey = Symbol('routingId');
export function RoutingId(): (target: any, propertyName: any) => void {
  return function(target: any, propertyName: any): void {
    Reflect.defineMetadata(routingIdKey, propertyName, target);
  };
}

export function getRoutingIdProp<T extends Entity, K extends keyof T>(target: T): K | undefined {
  const entityId = Reflect.getMetadata(routingIdKey, target);
  return entityId;
}
