import { Category } from "./category.entity";

describe('Category class', () => {
  it('should make a category with no fields', () => {
    const cat = new Category();
    expect(cat).toBeTruthy();
    expect(cat.name).toBe('');
    expect(cat.img).toBe('');
    expect(cat.subcategory).toBe(NaN);
  });
  it('should make a category with name only', () => {
    const cat = new Category();
    expect(cat).toBeTruthy();
    expect(cat.name).toBe('Test');
    expect(cat.img).toBe('');
    expect(cat.subcategory).toBe('');
  });
  it('should make a category with img only', () => {
    const cat = new Category();
    expect(cat).toBeTruthy();
    expect(cat.name).toBe('Test');
    expect(cat.img).toBe('Breed');
    expect(cat.subcategory).toBe('');
  });
  it('should make a category with subcategory only', () => {
    const cat = new Category();
    expect(cat).toBeTruthy();
    expect(cat.name).toBe('');
    expect(cat.img).toBe('');
    expect(cat.subcategory).toBe('Test');
  });
  it('should make a category with name, img and subcategory', () => {
    const cat = new Category();
    expect(cat).toBeTruthy();
    expect(cat.name).toBe('Test');
    expect(cat.img).toBe('Test');
    expect(cat.subcategory).toBe('Test');
  });
});