import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { CocktailService } from './cocktail.service';
import { NgxsModule } from '@ngxs/store';
import { CocktailsState } from '../state/cocktail.state';
import { FiltersState } from '../state/filter.state';

describe('CocktailService test using HttpClientTestingModule', () => {
    let httpTestingController: HttpTestingController;
    let service: CocktailService;
    const baseUri = 'https://www.thecocktaildb.com/api/json/v1/1';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                NgxsModule.forRoot([CocktailsState, FiltersState]),
            ],
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(CocktailService);
    });

    // TODO:
    it('should return the length of possible pages', () => {
        const pageLength = service.getPagesLength();
        expect(pageLength).toBeTruthy();
    });

    // TODO:
    it('should return a list from paginateCocktails', () => {
        const paginateResult = service.paginateCocktails(5);
        expect(paginateResult).toBeTruthy();
    });

    // TODO:
    it('should return cocktail details', () => {
        const cocktailDetails = service.getCocktailDetails("12345");
        expect(cocktailDetails).toBeTruthy();
    });

    // TODO:
    it('should return available category list', () => {
        const categoryList = service.getFilter("Glass");
        expect(categoryList).toBeTruthy();
    });

    // TODO:
    it('should reset the search to letter a if no term is included', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should search by first letter', () => {
        const searchResult = service.searchCocktails("m");
        expect(searchResult).toBeTruthy();
    });

    // TODO:
    it('should search by name', () => {
        const searchResult = service.searchCocktails("margarita");
        expect(searchResult).toBeTruthy();
    });

    // TODO:
    it('should filter by category (ingredient)', () => {
        const filterResult = service.filterByCategory("Ingredient", "Brandy");
        expect(filterResult).toBeTruthy();
    });

    // TODO:
    it('should get a random drink', () => {
        const randomResult = service.getRandomCocktail();
        expect(randomResult).toBeTruthy();
    });

    // TODO:
    it('throws 404 error', () => {
        expect(false).toBeTruthy();
    });
});
