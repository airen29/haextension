/* eslint-disable import/prefer-default-export */
import { getFullPath } from './location'

export const isDiscussion = path =>
/(p=manager_discussion_detail.php)/.test(path || getFullPath())

export const isMessages = path =>
/(p=manager_mail.php)/.test(path || getFullPath())

export const isExtensionCreator = path =>
/(p=manager_manager_info.php&id=227387)/.test(path || getFullPath())

export const isExtensionCreatorTeam = path => 
/(p=public_team_info_basic.php&team_id=35950)/.test(path || getFullPath())

export const isDiscussionPosts = path =>
/(p=manager_discussion_posts.php)/.test(path || getFullPath())

export const isLinesPage = path =>
/(p=manager_lines_lineup_form_new.php)/.test(path || getFullPath())
