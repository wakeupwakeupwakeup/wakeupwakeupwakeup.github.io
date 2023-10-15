import Link from "next/link";

export default function Blog() {
    class Post {
        get date(): string {
            return this._date;
        }

        set date(value: string) {
            this._date = value;
        }
        get title(): string {
            return this._title;
        }

        set title(value: string) {
            this._title = value;
        }
        private _title: string;
        private _date: string;
    }

    let post = new Post();
    post.title = "Payment methods: Skrill, Neteller, webmoney, Bank transfer";
    post.date = "10.02.2023";

    return (
        <div className={"flex flex-col gap-4 max-h-2/4 max-w-xl rounded-50 border-2 border-blue-500 p-2.5 pb-0 pr-4 xl:rounded-64 md:p-6 md:py-0 overflow-hidden bg-slate-700"}>
            <div className={"flex flex-col gap-4 overflow-y-scroll scrollbar scrollbar-track scrollbar-thumb pr-4 "}>
                {
                    Array.from({length: 10}).map((_, index) => {
                        return (
                            <Link key={index} href={"#"}>
                                <div className={"flex flex-col gap-3.5 items-start justify-center py-4 px-8 md:px-12 rounded-64 bg-slate-900 snap-center"}>
                                    <h3 className={"text-base font-light sm:text-2xl"}>{post.title}</h3>
                                    <span className={"text-sm font-light text-gray-200"}>{post.date}</span>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    )
}