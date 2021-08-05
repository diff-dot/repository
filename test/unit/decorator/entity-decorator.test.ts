// import { expect } from 'chai';
// import { Entity } from '../../../../src/lib/model/Entity';
// import { EntityId, getEntityIdProps } from '../../../../src/lib/repository/decorator/EntityId';
// import { getMariadbEntityOptions, MariadbEntity } from '../../../../src/lib/mariadb/MariadbEntityDecorator';
// import { config } from '../../../../src/config';
// import { fail } from 'assert';

// @MariadbEntity({ db: 'test', table: 'test', host: config.data.mariadb.hosts.account })
// class TestEntity extends Entity {
//   @EntityId()
//   testEntityId: string;

//   @EntityId()
//   secondTestEntityId: string;
// }

// @MariadbEntity({ db: 'test', table: 'test2', host: config.data.mariadb.hosts.account })
// class TestEntity2 extends TestEntity {
//   stuffProp: string;
// }

// class EmptyEntity extends Entity {}

// describe('repo > entity-decorator', () => {
//   it('데코레이터로 지정한 entiy 정보 추출', async () => {
//     const testEntity = new TestEntity();
//     expect(getMariadbEntityOptions(testEntity)).eql({ db: 'test', table: 'test', host: config.data.mariadb.hosts.account });

//     const entityIdProps = getEntityIdProps(testEntity);
//     expect(entityIdProps).to.be.not.undefined;
//     if (entityIdProps) {
//       expect(entityIdProps.get('testEntityId')).to.be.eql({});
//       expect(entityIdProps.get('secondTestEntityId')).to.be.eql({});
//     }
//   });

//   it('클래스 상속시 상위 클래스에 데코레이터로 선언한 정보도 상속', async () => {
//     const testEntity = new TestEntity2();
//     expect(getMariadbEntityOptions(testEntity)).eql({ db: 'test', table: 'test2', host: config.data.mariadb.hosts.account });

//     const entityIdProps = getEntityIdProps(testEntity);
//     expect(entityIdProps).to.be.not.undefined;
//     if (entityIdProps) {
//       expect(entityIdProps.get('testEntityId')).to.be.eql({});
//       expect(entityIdProps.get('secondTestEntityId')).to.be.eql({});
//     }
//   });

//   it('상속받은 클래스에서 MariadbEntity options 을 재정의 했을 경우 상속받은 클래스의 정보 사용', async () => {
//     const testEntity = new TestEntity2();
//     expect(getMariadbEntityOptions(testEntity)).eql({ db: 'test', table: 'test2', host: config.data.mariadb.hosts.account });
//   });

//   it('데코레이터로 지정한 정보가 상위 클래스에 영향을 주지 않는지 확인', async () => {
//     const testEntity = new EmptyEntity();
//     const entityIdProps = getEntityIdProps(testEntity);
//     expect(entityIdProps).to.be.undefined;

//     try {
//       getMariadbEntityOptions(testEntity);
//       fail('No exception occurred.');
//     } catch (e) {}
//   });
// });
