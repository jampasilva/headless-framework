export interface ApiConfig {
  baseUrl: string;
  authorizeEndpoint: string;
  secret?: string;
}

export interface PageInfo {
  have_posts: boolean;
  post_id: number;
  post_type: string;
  is_404: boolean;
  is_archive: boolean;
  is_single: boolean;
  is_page: boolean;
  is_home: boolean;
  is_category: boolean;
  is_author: boolean;
  is_search: boolean;
  is_tag: boolean;
}

export interface TemplateProps {
  pageInfo: PageInfo;
}

export interface HeadlessTheme {
  DefaultTemplate: import("react").FC<TemplateProps>;
  SingleTemplate?: import("react").FC<TemplateProps>;
  ListTemplate?: import("react").FC<TemplateProps>;
  NotFoundTemplate?: import("react").FC<TemplateProps>;
}

export interface ThemeContext {
  pageInfo?: PageInfo;
}