export interface ITsqRequest {
  source_text: string;
  negate_src: boolean | string;
  src_user_text: string | undefined;
  dest_text: string;
  negate_dst: boolean | string;
  application_select: string | undefined;
  serv_select: string;
  ButtonPressed: string;
  SelectedFirewalls: string;
  qry_select: string;
  inFrm: string;
  query_text: string;
  query_name: string;
}
