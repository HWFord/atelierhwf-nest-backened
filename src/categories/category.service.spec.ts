import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Subcategory } from "src/subcategories/subcategory.entity";
import { Repository } from "typeorm";
import { CategoriesService } from "./categories.service";
import { Category } from "./category.entity";

const testCategory = 'Test Category';
const testImg = 'Test Img';
const oneCategory = new Category();

const categoryArray = [
  new Category(),
  new Category(),
  new Category()
];

const testSubcategorieIDs = [
  1,
  2,
  3
];

describe('CatService', () => {
  let service: CategoriesService;
  let repo: Repository<Category>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(Category),
          // define all the methods that you use from the catRepo
          // give proper return values as expected or mock implementations, your choice
          useValue: {
            create:jest.fn().mockReturnValue(oneCategory),
            findAll:jest.fn().mockResolvedValue(categoryArray),
            findOne: jest.fn().mockResolvedValue(oneCategory),
            update:jest.fn().mockResolvedValue(true),
            remove:jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    repo = module.get<Repository<Category>>(getRepositoryToken(Category));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findAll', () => {
    it('should return an array of categories', async () => {
      const categories = await service.findAll();
      expect(categories).toEqual(categoryArray);
    });
  });
  describe('findOne', () => {
    it('should get a single category', () => {
      const repoSpy = jest.spyOn(repo, 'findOne');
      expect(service.findOne(1)).resolves.toEqual(oneCategory);
      expect(repoSpy).toBeCalledWith({ id: 1 });
    });
  });
  describe('create', () => {
    it('should successfully insert a category', () => {
      expect(
        service.create({
          name: testCategory,
          img: testImg,
          subcategorieIDs:testSubcategorieIDs
        }),
      ).resolves.toEqual(oneCategory);
      expect(repo.create).toBeCalledTimes(1);
      expect(repo.create).toBeCalledWith({
        name: testCategory,
        img: testImg,
        subcategorieIDs:testSubcategorieIDs
      });
      expect(repo.save).toBeCalledTimes(1);
    });
  });
  describe('update', () => {
    it('should call the update method', async () => {
      const category = await service.update({

      });
      expect(category).toEqual(oneCategory);
      expect(repo.update).toBeCalledTimes(1);
      expect(repo.update).toBeCalledWith(
        { id: 'a uuid' },
        { name: testCategory, breed: testImg, id: 'a uuid' },
      );
    });
  });
  describe('remove', () => {
    it('should return {deleted: true}', () => {
      expect(service.remove(1).resolves.toEqual({ deleted: true });
    });
    it('should return {deleted: false, message: err.message}', () => {
      const repoSpy = jest
        .spyOn(repo, 'delete')
        .mockRejectedValueOnce(new Error('Bad Delete Method.'));
      expect(service.remove(99).resolves.toEqual({
        deleted: false,
        message: 'Bad Delete Method.',
      });
      expect(repoSpy).toBeCalledWith({ id: 1 });
      expect(repoSpy).toBeCalledTimes(1);
    });
  });

});