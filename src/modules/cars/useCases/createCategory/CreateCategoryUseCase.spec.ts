import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

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

  it('should not be able to create a new category with name already exists', async () => {
    expect(async () => {
      const category1 = {
        name: 'Category 1',
        description: 'Category 1 description',
      };

      await createCategoryUseCase.execute(category1);

      await createCategoryUseCase.execute(category1);
    }).rejects.toBeInstanceOf(AppError);
  });
});
