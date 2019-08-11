export interface NewsArticle{
    id: number;
    title: string;
    content: string;
    dateString: string;
    baseImageName: string;
    articleType: ArticleType;
    isFavourite: boolean;
}

export enum ArticleType{
    TopStory = 'TOP_STORY',
    CodeExample = 'CODE_EXAMPLE'
}

//store root state
export interface RootState{
    topToolbar: TopToolbarState;
}

export interface TopToolbarState{
    title: string;
}