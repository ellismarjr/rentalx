import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepository: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  beforeAll(() => {
    categoriesRepository = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category 1',
      description: 'Category 1 description',
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepository.findByName('Category 1');

    expect(categoryCreated).toHaveProperty('id');
  });
});
