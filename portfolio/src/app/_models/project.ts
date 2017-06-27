export class Project{
    id: number;
    srcUrl: string;
    description: string;
    category: string;
    title: string;
    toolsUsed: string[];
    infoBlocks: InfoBlock[];
}

export class InfoBlock{
    imgUrl? :string;
    content: string;
}