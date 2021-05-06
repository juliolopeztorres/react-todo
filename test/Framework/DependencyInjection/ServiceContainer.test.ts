import ServiceContainer from "../../../src/Framework/DependencyInjection/ServiceContainer";
import TaskRepository from "../../../src/Data/Repository/TaskRepository";

test('Can load services', () => {
    expect(new ServiceContainer().getService(TaskRepository.name)).not.toBeNull()
});

test('Load non-existing services throws errors', () => {
    expect(() => new ServiceContainer().getService('RandomService')).toThrowError(
        'Unexpected numbers of services found for name RandomService: 0'
    )
});
