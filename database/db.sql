CREATE DATABASE database_links;

USE database_links;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username varchar(16) not null,
    password varchar(60) not null,
    fullname varchar(100) not null
);

alter table users
    add primary key (id);


alter table users
    modify id int(11) not null auto_increment = 2;

describe users;

CREATE TABLE links(
    id int(11) not null,
    title varchar(150) not null,
    url varchar(255) not null,
    description text,
    user_id int(11),
    created_at timestamp not null default current_timestamp,
    constraint fk_user foreing key (user_id) references users(id)
);

alter table links
    add primary key (id);
    
alter table links
    modify id int(11) not null auto_increment;
    
    describe links